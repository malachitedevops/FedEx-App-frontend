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
	
	}

}
