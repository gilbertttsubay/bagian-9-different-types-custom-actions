const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

// import core from "@actions/core"
// import github from "@actions/github"
// import exec from "@actions/exec"


function run() {

    core.notice("Hello form my custom javascript actions")
}

run()