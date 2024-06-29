alibehecli
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/alibehecli.svg)](https://npmjs.org/package/alibehecli)
[![Downloads/week](https://img.shields.io/npm/dw/alibehecli.svg)](https://npmjs.org/package/alibehecli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g alibehecli
$ alibehecli COMMAND
running command...
$ alibehecli (--version)
alibehecli/0.0.0 win32-x64 node-v20.15.0
$ alibehecli --help [COMMAND]
USAGE
  $ alibehecli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`alibehecli help [COMMAND]`](#alibehecli-help-command)
* [`alibehecli now`](#alibehecli-now)
* [`alibehecli plugins`](#alibehecli-plugins)
* [`alibehecli plugins add PLUGIN`](#alibehecli-plugins-add-plugin)
* [`alibehecli plugins:inspect PLUGIN...`](#alibehecli-pluginsinspect-plugin)
* [`alibehecli plugins install PLUGIN`](#alibehecli-plugins-install-plugin)
* [`alibehecli plugins link PATH`](#alibehecli-plugins-link-path)
* [`alibehecli plugins remove [PLUGIN]`](#alibehecli-plugins-remove-plugin)
* [`alibehecli plugins reset`](#alibehecli-plugins-reset)
* [`alibehecli plugins uninstall [PLUGIN]`](#alibehecli-plugins-uninstall-plugin)
* [`alibehecli plugins unlink [PLUGIN]`](#alibehecli-plugins-unlink-plugin)
* [`alibehecli plugins update`](#alibehecli-plugins-update)
* [`alibehecli top`](#alibehecli-top)
* [`alibehecli weather`](#alibehecli-weather)

## `alibehecli help [COMMAND]`

Display help for alibehecli.

```
USAGE
  $ alibehecli help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for alibehecli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.3/src/commands/help.ts)_

## `alibehecli now`

Displays the current datetime

```
USAGE
  $ alibehecli now [--unix]

FLAGS
  --unix  Output in UNIX format

DESCRIPTION
  Displays the current datetime

EXAMPLES
  $ alibcli now

  $ alibcli now --unix
```

_See code: [src/commands/now.ts](https://github.com/alibcli/alibehecli/blob/v0.0.0/src/commands/now.ts)_

## `alibehecli plugins`

List installed plugins.

```
USAGE
  $ alibehecli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ alibehecli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/index.ts)_

## `alibehecli plugins add PLUGIN`

Installs a plugin into alibehecli.

```
USAGE
  $ alibehecli plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into alibehecli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ALIBEHECLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ALIBEHECLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ alibehecli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ alibehecli plugins add myplugin

  Install a plugin from a github url.

    $ alibehecli plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ alibehecli plugins add someuser/someplugin
```

## `alibehecli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ alibehecli plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ alibehecli plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/inspect.ts)_

## `alibehecli plugins install PLUGIN`

Installs a plugin into alibehecli.

```
USAGE
  $ alibehecli plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into alibehecli.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ALIBEHECLI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ALIBEHECLI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ alibehecli plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ alibehecli plugins install myplugin

  Install a plugin from a github url.

    $ alibehecli plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ alibehecli plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/install.ts)_

## `alibehecli plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ alibehecli plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ alibehecli plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/link.ts)_

## `alibehecli plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ alibehecli plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ alibehecli plugins unlink
  $ alibehecli plugins remove

EXAMPLES
  $ alibehecli plugins remove myplugin
```

## `alibehecli plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ alibehecli plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/reset.ts)_

## `alibehecli plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ alibehecli plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ alibehecli plugins unlink
  $ alibehecli plugins remove

EXAMPLES
  $ alibehecli plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/uninstall.ts)_

## `alibehecli plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ alibehecli plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ alibehecli plugins unlink
  $ alibehecli plugins remove

EXAMPLES
  $ alibehecli plugins unlink myplugin
```

## `alibehecli plugins update`

Update installed plugins.

```
USAGE
  $ alibehecli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.2/src/commands/plugins/update.ts)_

## `alibehecli top`

Fetches top HackerNews posts

```
USAGE
  $ alibehecli top [-f <value>] [-n <value>]

FLAGS
  -f, --format=<value>  [default: text] Output format (json or text)
  -n, --number=<value>  [default: 10] Number of top posts

DESCRIPTION
  Fetches top HackerNews posts

EXAMPLES
  $ alibcli top -n 10

  $ alibcli top -n 2 -f json
```

_See code: [src/commands/top.ts](https://github.com/alibcli/alibehecli/blob/v0.0.0/src/commands/top.ts)_

## `alibehecli weather`

Displays the current weather

```
USAGE
  $ alibehecli weather

DESCRIPTION
  Displays the current weather
```

_See code: [src/commands/weather.ts](https://github.com/alibcli/alibehecli/blob/v0.0.0/src/commands/weather.ts)_
<!-- commandsstop -->
