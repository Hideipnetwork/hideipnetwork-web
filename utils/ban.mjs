import { exec } from "child_process";

/*
* This method has certain risks, please consider it as appropriate
* If you have an alternative please contact me 💌contact#hideip.network
*/

// disable domain
export function disableWebsite(domain) {
    return new Promise((resolve, reject) => {
        exec(`sudo chmod 000 /etc/hosts && echo "0.0.0.0 ${domain}" | sudo tee -a /etc/hosts`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            resolve();
        });
    });
}

// enbale domain
export function enableWebsite(domain) {
    return new Promise((resolve, reject) => {
        exec(`sudo sed -i '/${domain}/d' /etc/hosts`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            resolve();
        });
    });
}