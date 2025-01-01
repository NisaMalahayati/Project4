pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
                bat 'docker build -t nisa329/my-static-site .'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'docker run --rm nisa329/my-static-site test-command || echo "No tests implemented"'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                echo 'Pushing image to Docker Hub...'
                withDockerRegistry([credentialsId: 'dockerhub-credentials', url: '']) {
                    bat 'docker push nisa329/my-static-site'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                bat 'docker run -d -p 8082:80 nisa329/my-static-site'
            }
        }
    }
}
