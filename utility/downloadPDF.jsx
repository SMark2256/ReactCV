const https = require('https');
import fs from 'fs'

const path = require('path');

const downloadFile = (url, callback) => {

      const file = path.basename(url)

      console.log(file)

      const req = https.get(file, function(res){
            const filestream = fs.createWriteStream("cv.pdf");
            res.pipe(filestream);

            filestream.on("error", function(err){
                  console.log(err);
            });

            filestream.on('finish', function(){
                  filestream.close(console.log(callback));
            });

      });

      req.on("error" , function(err){
            console.log(err);
      });
}

export default downloadFile;