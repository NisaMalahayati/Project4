pipeline {
    agent any

    environment {
        BUILD_DIR = 'Project4'
        SSH_CREDENTIALS_ID = 'GitHub_SSH_Key'  
    }

    stages {
        stage('Checkout') {
            steps {
                // Mengambil kode dari GitHub menggunakan SSH
                git branch: 'main', url: 'git@github.com:NisaMalahayati/Project4.git', credentialsId: 228b473c-7c98-46ca-8446-079a0c4bad75
            }
        }

        stage('Build') {
            steps {
                echo 'No build step required for static site'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh '''
                    # Menggunakan rsync untuk deploy ke server
                    rsync -avz $BUILD_DIR/ user@server:/path/to/deploy/
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Build and Deploy Succeeded!'
        }
        failure {
            echo 'Build or Deploy Failed!'
        }
    }
}
