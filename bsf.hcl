
packages {
  development = ["coreutils-full@9.5", "bash@5.2.15"]
  runtime     = ["cacert@3.95"]
}

oci "pkgs" {
  name          = "docker.io/saiyam911/devops-baseimage"
  cmd           = []
  entrypoint    = []
  envVars       = []
  exposedPorts  = []
  importConfigs = []
}
