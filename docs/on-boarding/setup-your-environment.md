# Setup your environment

Before you can start, please take sometime to go through the setup process for your development environment. You can choose between a `One-click Installation` or a `Manual Installation` approach.

## One-click Installation

To help you getting started we have prepared an automated seup script for your computer. Please run the following command to install and configure all necessary softwares and tools.

```sh
curl -o- https://raw.githubusercontent.com/soramitsukhmer/setup/main/install | sh
```

> The source can be found here. [soramitsukhmer/setup](https://github.com/soramitsukhmer/setup)

Once done, then you can head over to [`Engineering Guide -> Tooling`](/guide/tooling/ide-support.html) to setup your editor.

## Manual Installation

### Prerequisites

In order to download necessary tools and install dependencies, you need network access.

You'll need the following tools:

- [Homebrew](https://brew.sh/), follow the [installation guide](https://brew.sh/#install)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/), x64, version `14.x` or later
- ~~[Yarn](https://yarnpkg.com/), follow the [installation guide](https://yarnpkg.com/en/docs/install)~~ — :warning: use `pnpm` instead.
- [pnpm](https://pnpm.io/), follow the [installation guide](https://pnpm.io/installation)
- [Visual Studio Code](https://code.visualstudio.com/) (**Recommended**) or [Atom](https://atom.io/)
- [Fork](https://git-fork.com/) (**Recommended**) or [GitHub Desktop](https://desktop.github.com/)
- [Docker](https://www.docker.com/), follow the [installation guide](https://docs.docker.com/get-docker/)


### Platform setup:

- **macOS**  
    You can use one of the following release of **macOS** since it provids best support with our required toolings.

    - **macOS 10.15 Catalina**
    - **macOS 11 Big Sur** (**Recommended**)
    - **macOS 12 Monterey**

    [Xcode](https://developer.apple.com/xcode/downloads/) and the **Command Line Tools**, which will install `gcc` and the related toolchain containing `make`.
    
    Run `xcode-select --install` to install the **Command Line Tools**.

- **Windows WSL**  
    You must be running **Windows 10** version *2004* and higher (Build *19041* and higher) or **Windows 11**.  

    - [Windows Subsystem for Linux Documentation](https://docs.microsoft.com/en-us/windows/wsl/)
    - [Selfhosting on Windows WSL](https://github.com/microsoft/vscode/wiki/Selfhosting-on-Windows-WSL)

- **Linux**  
    For development using linux you can use your favorite distro or the [Ubuntu 20.04 LTS](https://ubuntu.com/) (**Recommended**).

    - On Debian-based Linux: `sudo apt-get install build-essential g++ libx11-dev libxkbfile-dev libsecret-1-dev python-is-python3`
    - On Red Hat-based Linux: `sudo yum groupinstall "Development Tools" && sudo yum install libX11-devel.x86_64 libxkbfile-devel.x86_64 libsecret-devel # or .i686`

- **Development container**

    Alternatively, you can avoid local dependency installation as you can use Visual Studio Code Remote - Containers / Codespaces / DevContainer [development container](https://code.visualstudio.com/docs/remote/containers).

    Docker / the Codespace should have at least 4 Cores and 6 GB of RAM (8 GB recommended) to run the full build.


Once done, then you can head over to [`Engineering Guide -> Tooling`](/guide/tooling/ide-support.html) to setup your editor.
