const form = new FormData();
form.append('wait', 'true');
form.append('redactHeadshot', 'true');
form.append('redactPersonalDetails', 'true');
form.append('redactWorkDetails', 'true');
form.append('redactEducationDetails', 'true');
form.append('redactReferees', 'true');
form.append('redactLocations', 'true');
form.append('redactDates', 'true');
form.append('redactGender', 'true');
form.append('identifier', 'test');
form.append('fileName', 'file_name');
form.append('url', 'source_url');
form.append('language', 'en');

const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    authorization: 'Bearer your_token'
  }
};

options.body = form;

fetch('https://api.affinda.com/v2/redacted_resumes', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));