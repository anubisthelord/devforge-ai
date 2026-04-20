module.exports = {
  apps: [{
    name: 'devforge.ai',
    script: 'npm',
    args: 'run start',
    instances: 1,
    exec_mode: 'fork',
    interpreter: "none",
    env: {
      NODE_ENV: 'production',
      PORT: 42966
    },
    error_file: 'logs/err.log',
    out_file: 'logs/out.log',
    log_file: 'logs/combined.log',
    time: true
  }]
}



