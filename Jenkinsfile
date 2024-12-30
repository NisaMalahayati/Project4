pipeline {
    agent any

    environment {
        BUILD_DIR = 'MD Entertainment'  
    }

    stages {
        stage('Checkout') {
            steps {
                // Mengambil kode dari GitHub
                git 'https://github.com/NisaMalahayati/Project4.git'
            }
        }

        stage('Build') {
            steps {
                // kalau punya proses build (misalnya kompilasi CSS atau JavaScript),
                // bisa tambahkan di sini.
                // Namun, kalau hanya file statis, stage ini bisa dilewati.
                echo 'No build step required for static site'
            }
        }

        stage('Deploy') {
            steps {
                // Proses deploy ( meng-upload ke server)
                script {
                    sh '''
                    #  menggunakan rsync untuk meng-upload ke server
                    rsync -avz $BUILD_DIR/ username@server:/path/to/deploy/
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
