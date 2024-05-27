pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'website'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/effozen/website.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // npm이 설치되어 있는지 확인
                    if (!fileExists('node_modules')) {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    docker.build("${env.DOCKER_IMAGE}:${env.DOCKER_TAG}")
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // 기존 컨테이너를 중지하고 제거
                    sh 'docker rm -f react-app || true'
                    // 새 컨테이너를 실행
                    sh 'docker run -d -p 80:80 --name react-app -v $WORKSPACE/build:/usr/share/nginx/html nginx'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
