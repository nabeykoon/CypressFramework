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
                sh "sed -i 's/var VERIFY_TEST_RUNNER_TIMEOUT_MS.*;/var VERIFY_TEST_RUNNER_TIMEOUT_MS = 60000;/g' node_modules/cypress/lib/tasks/verify.js"
                sh 'npm run cy:verify'
            }
        }
        stage('Test') { 
            steps {
                sh "npm run ${params.testSuite}"
            }
        }
    }
}