{
  apps: [
    {
      name: 'xtshop',
      script: './server-entry.js',
      log_data_format: 'YYYY-MM-DD HH:mm:SS',
      error_file: './logs/iq-err.log',
      out_file: './logs/iq-out.log',
      instances: '1',
      exec_mode: 'cluster',
      watch: false
    }
  ]
}




