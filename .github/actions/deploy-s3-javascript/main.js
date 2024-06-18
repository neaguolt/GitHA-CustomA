const core= require('@actions/core');
const github= require('@actions/github');
const exec= require('@actions/exec');

function run() {
    //Get the inputs values
    const bucket= core.getInput('s3bucket', { required: true })
    const dist= core.getInput('dist', { required: true })
    const region= core.getInput('region', { required: true })

    //Upload file
    const s3URI= `s3://${bucket}`;
    exec.exec(`aws s3 sync ${dist} ${s3URI} --region ${region}`)
}

run();