String podLabel = 'react-playground'

String gitUrl = 'https://github.com/MaggGomes/react-playground.git'
String gitCredentials = 'react-creds'
String gitBranch = 'master'

pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('SCM checkout'){
            steps {
                git credentialsId: gitCredentials, url: gitUrl, branch: gitBranch
            }
        }

        stage ('Compile Stage') {
            steps {
                sh 'yarn install'
            }     
        }

        stage ('Testing Stage') {

            steps {
                 sh 'yarn test'
            }
        }
    }
}