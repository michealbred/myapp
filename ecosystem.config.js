module.exports = {
  apps: [{
    name: 'website',  // name for PM2 commands
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3000', // change port if needed
    env: {
      NODE_ENV: 'production',
      NOWPAYMENTS_IPN_SECRET: '6CQGSAA+F9d/skX8ECyBuKysdXw6jfLl'
    }
  }]
}
