String podLabel = 'react-playground'

String gitUrl = 'https://github.com/MaggGomes/react-playground.git'
String gitCredentials = 'react-creds'
String gitBranch = 'master'

node{
    stage('SCM checkout'){
        git credentialsId: gitCredentials, url: gitUrl, branch: gitBranch
    }
}