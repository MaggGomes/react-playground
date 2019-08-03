pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
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
