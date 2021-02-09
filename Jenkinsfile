pipeline {
    agent {
        docker {
            image 'cypress/base:10.0.0' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Install Dependencies') { 
            steps {
                sh 'npm ci'
                sh 'npm run cy:verify'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run ${params.testSuite}'
            }
        }
    }
}