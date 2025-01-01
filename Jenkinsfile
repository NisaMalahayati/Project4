pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'docker build -t nisa329/my-static-site .'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // klo ada perintah tambah di sini
                sh 'docker run --rm nisa329/my-static-site test-command || echo "No tests implemented"'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                echo 'Pushing image to Docker Hub...'
                withDockerRegistry([credentialsId: 'dockerhub-credentials', url: '']) {
                    sh 'docker push nisa329/my-static-site'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                sh 'docker run -d -p 8080:80 nisa329/my-static-site'
            }
        }
    }
}
