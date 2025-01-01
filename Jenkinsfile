pipeline {
    agent any

    environment {
        GIT_BASH_PATH = 'C:\\Program Files\\Git\\bin\\bash.exe' // Ganti dengan path Git Bash di sistemmu
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building the project...'
                script {
                    bat """
                    "${GIT_BASH_PATH}" -c "docker build -t nisa329/my-static-site ."
                    """
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                script {
                    bat """
                    "${GIT_BASH_PATH}" -c "docker run --rm nisa329/my-static-site test-command || echo 'No tests implemented'"
                    """
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                echo 'Pushing image to Docker Hub...'
                script {
                    withDockerRegistry([credentialsId: 'dockerhub-credentials', url: '']) {
                        bat """
                        "${GIT_BASH_PATH}" -c "docker push nisa329/my-static-site"
                        """
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                script {
                    bat """
                    "${GIT_BASH_PATH}" -c "docker run -d -p 8082:80 nisa329/my-static-site"
                    """
                }
            }
        }
    }
}
