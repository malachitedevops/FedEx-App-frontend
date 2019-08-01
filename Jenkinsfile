pipeline {
	
	agent any

	stages {
	
		stage ('Checkout SCM') {
			when {
				branch 'master'
			}
			steps {
				checkout scm
			}
		}

		stage ('Install Angular') {
			when {
				branch 'master'
			}
			steps {
				sh 'cd ./FedEx && sudo npm install @angular/cli'
				sh 'cd ./FedEx && sudo npm install'
			}
		}

		stage ('Production build') {
			when {
				branch 'master'
			}
			steps {
				sh 'cd ./FedEx && sudo ng build --prod --base-href ./'
			}
		}
		
		stage ('Deployment') {
			when {
				branch 'master'
			}
			steps {
				withAWS(credentials: 'awsebcred', region: 'us-east-1') {
					sh 'aws s3 sync ./FedEx/dist/FedEx s3://fedexfrontend-772e1b2'
				}
			}
		}

		stage ('Backup current version') {
			when {
				branch 'master'
			}
			steps {
				withAWS(credentials: 'awsebcred', region: 'us-east-1') {
					sh 'zip fe_backup_$BUILD_NUMBER.zip -r ./FedEx/dist/FedEx/*'
					sh 'aws s3 cp ./fe_backup_$BUILD_NUMBER.zip s3://fedexenv-4d60572/frontend-backup/'
				}
			}
		}

	}

}
