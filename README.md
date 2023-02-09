<p style="text-align: center;">
  <a href="https://github.com/loft-sh/create-space/actions"><img alt="create-loft-space status" src="https://github.com/loft-sh/create-space/workflows/build-test/badge.svg"></a>
</p>

# create-space

This is a GitHub Action to create a space in loft. It is intended to be used with the [setup-loft GitHub Action](https://github.com/loft-sh/setup-loft) to first install the Loft CLI.

## Usage

This action will create a Loft Space for use in job steps.

### Example: Create a space named `staging` on commits to `main`.
```yaml
name: Deploy to Staging
on:
  push:
    branches:
      - 'main'
jobs:
  deploy-staging:
    runs-on: ubuntu-latest
    steps:
      - name: Install Loft CLI
        uses: loft-sh/setup-loft@main
        with:
          url: ${{ secrets.LOFT_URL }}
          access-key: ${{ secrets.LOFT_ACCESS_KEY }}
      - name: Create staging Space
        uses: loft-sh/create-space@main
        with:
          name: staging
```

## Customizing

### inputs

The following inputs can be used as `step.with` keys

| Name                              | Type     | Description                                                                                  |
|-----------------------------------|----------|----------------------------------------------------------------------------------------------|
| `name`                            | String   | The name of the space to create                                                              |
| `account`                         | String   | The cluster account to use                                                                   |
| `cluster`                         | String   | The cluster to use                                                                           |
| `project`                         | String   | The project to use (requires Loft 3.0 and above)                                             |
| `delete-after`                    | Number   | If set to non zero, will tell loft to delete the space after specified seconds of inactivity |
| `sleep-after`                     | Number   | If set to non zero, will tell the space to sleep after specified seconds of inactivity       |
| `disable-direct-cluster-endpoint` | Boolean   | When enabled does not use an available direct cluster endpoint to connect to the space      |
| `auto-cleanup`                    | Boolean   | Delete the Space after the job run (default false)                                          |
| `use`                             | Boolean   | When enabled this will skip space creation if the space already exists (default false)      |