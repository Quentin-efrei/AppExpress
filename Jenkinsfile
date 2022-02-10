pipeline {
    agent any
    stages {
        stage('Cloning git') {
            steps {
                git([url:'https://github.com/Quentin-efrei/AppExpress.git',branch:'release'])
		bat "git pull origin dev"
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
	   	    bat "git push origin release"
            }
        }
    }
}
