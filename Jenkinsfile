pipeline {
    agent any

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

