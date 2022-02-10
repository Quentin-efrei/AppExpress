pipeline {
    agent any
    stages {
        stage('Cloning git') {
            steps {
                git([url:'https://github.com/Quentin-efrei/AppExpress.git',branch:'dev'])
            }
        }
        stage('Building') {
            steps {
                bat "docker-compose build"
            }
        }
        stage('Testing') {
            steps {
                //bat "docker-compose up"
                echo 'Testing'
                //bat "docker-compose down"
            }
        }
        stage('pushing into git'){
            steps {
                    bat 'git config --global user.email "quentin.courtois@efrei.net"'
                    bat 'git config --global user.name "Quentin-efrei"'
                    bat "git checkout release"
                    bat "git pull origin dev"
	   	    bat "git push origin release"
            }
        }
    }
}
