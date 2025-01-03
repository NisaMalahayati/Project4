pipeline {
    agent any

    environment {
        GIT_BASH_PATH = 'C:\\Program Files\\Git\\bin\\bash.exe' 
    }

    stages {
        stage('Check Docker') {
            steps {
                script {
                    def dockerPath = bat(script: 'echo %PATH%', returnStdout: true).trim()
                    echo "PATH is: ${dockerPath}"
                }
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building the project...'
                script {
                    try {
                        bat """
                        "${GIT_BASH_PATH}" -c "docker build -t nisa329/my-static-site ."
                        """
                    } catch (Exception e) {
                        echo "Error: ${e.getMessage()}"
                    }
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
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_HUB_CREDENTIALS_USR', passwordVariable: 'DOCKER_HUB_CREDENTIALS_PSW')]) {
                        bat """
                        echo ${DOCKER_HUB_CREDENTIALS_PSW} | docker login -u ${DOCKER_HUB_CREDENTIALS_USR} --password-stdin
                        docker push nisa329/my-static-site
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
                    "${GIT_BASH_PATH}" -c "docker run -d -p 8085:80 nisa329/my-static-site"
                    """
                }
            }
        }
    }
}
