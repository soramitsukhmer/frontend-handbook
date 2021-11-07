# Setup your environment

Before you can start, please take sometime to go through the setup process for your development environment.

## Prerequisites

In order to download necessary tools, clone the repository, and install dependencies via yarn, you need network access.

### You'll need the following tools:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/), x64, version `14.x` or later
- [Yarn](https://yarnpkg.com/), follow the [installation guide](https://yarnpkg.com/en/docs/install)
- [Docker](https://www.docker.com/), follow the [installation guide](https://docs.docker.com/get-docker/)


### Platform setup:

- **Windows WSL**  
    You must be running Windows 10 version 2004 and higher (Build 19041 and higher) or Windows 11.  

    - [Windows Subsystem for Linux Documentation](https://docs.microsoft.com/en-us/windows/wsl/)
    - [Selfhosting on Windows WSL](https://github.com/microsoft/vscode/wiki/Selfhosting-on-Windows-WSL)

- **Linux**  
    For development using linux you can use your favorite distro or the recommended [Ubuntu 20.04 LTS](https://ubuntu.com/).

    - On Debian-based Linux: `sudo apt-get install build-essential g++ libx11-dev libxkbfile-dev libsecret-1-dev python-is-python3`
    - On Red Hat-based Linux: `sudo yum groupinstall "Development Tools" && sudo yum install libX11-devel.x86_64 libxkbfile-devel.x86_64 libsecret-devel # or .i686`

- **macOS**  
    You can use one of the following release of **macOS** since it provids best support with our required toolings.

    - **macOS 10.15 Catalina**
    - **macOS 11 Big Sur**
    - **macOS 12 Monterey**

    [Xcode](https://developer.apple.com/xcode/downloads/) and the **Command Line Tools**, which will install `gcc` and the related toolchain containing `make`.
    
    Run `xcode-select --install` to install the **Command Line Tools**.

- **Development container**

    Alternatively, you can avoid local dependency installation as this repository includes a Visual Studio Code Remote - Containers / Codespaces [development container](https://code.visualstudio.com/docs/remote/containers).

    Docker / the Codespace should have at least 4 Cores and 6 GB of RAM (8 GB recommended) to run the full build.
