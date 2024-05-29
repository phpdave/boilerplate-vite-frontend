module.exports = {
  apps: [
    {
      name: 'frontend-client',
      script: './client/index.js',
      instances: '2',
      exec_mode: 'cluster',
      log_file: './logs/combined.outerr.log', // Log file for combined stdout and stderr
      out_file: './logs/out.log', // Log file for stdout
      error_file: './logs/error.log', // Log file for stderr
      log_date_format: 'YYYY-MM-DD HH:mm Z', // Log date format
    }
  ]
};
