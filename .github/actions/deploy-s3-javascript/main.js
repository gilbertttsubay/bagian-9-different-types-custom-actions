// const core = import('@actions/core')
// const github = import('@actions/github')
// const exec = import('@actions/exec')

import core from "@actions/core"
import github from "@actions/github"
import exec from "@actions/exec"


function run() {

    core.notice("Hello form my custom javascript actions")
}

run()