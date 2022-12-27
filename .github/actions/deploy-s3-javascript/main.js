const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

// import core from "@actions/core"
// import github from "@actions/github"
// import exec from "@actions/exec"


function run() {
    //1. Get some input values
   const bucket = core.getInput('bucket', {required: true})
    const bucketRegion = core.getInput('bucket-region', {required:true})
    const distFolder = core.getInput('dist-folder', {required:true})


    // upload my files

    const s3Uri = `s3://${bucket}`
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

   const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`

    core.setOutput('website-url', websiteUrl) // sama dengan echo "step-result=success >> $GITHUB_OUTPUT"

}

run()