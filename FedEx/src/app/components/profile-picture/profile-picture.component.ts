import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService } from '../../services/dialog.service';
import { ProfilePictureService } from '../../services/profile-picture.service';
import { AuthenticationService } from '../../services/authentication.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.sass']
})

export class ProfilePictureComponent implements OnInit, OnDestroy {
  // public avatars: any[];
  public imagePreview: string;
  public selectedFile: File;
  private userPictureSub: Subscription;
  // public isAvatarsVisible = false;

  constructor(
    private dialogService: DialogService,
    private profilePictureService: ProfilePictureService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.imagePreview = this.authenticationService.getUserAvatarLocal();
    this.userPictureSub = this.profilePictureService.getUserAvatarPath
      .subscribe((data) => {
        this.imagePreview = data;
      });
  }

  ngOnDestroy() {
    this.userPictureSub.unsubscribe();
  }

  onImagePicked(event: Event) {
    this.selectedFile = (event.target as HTMLInputElement).files[0];
    if (this.selectedFile.size >= environment.MAX_IMAGE_SIZE) {
      this.dialogService.openError('File size exceeds 5MB', null);
    } else if (this.selectedFile.type.indexOf('jpeg') === -1 && this.selectedFile.type.indexOf('jpg') === -1 && this.selectedFile.type.indexOf('png') === -1) {
      this.dialogService.openError('Unsupported file type', null);
    } else {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSaveImage() {
    const username = this.authenticationService.getUsernameLocal();
    this.profilePictureService.updateProfilePicture(this.selectedFile, username);
  }
}
