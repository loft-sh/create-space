<p align="center">
  <a href="https://github.com/lizardruss/create-loft-space/actions"><img alt="create-loft-space status" src="https://github.com/lizardruss/create-loft-space/workflows/build-test/badge.svg"></a>
</p>

# Create Loft Space Action

This is a GitHub Action to create a space in loft. It is intended to be used with the [Install Loft CLI GitHub Action](https://github.com/lizardruss/install-loft-cli) to first install the Loft CLI.

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
        uses: lizardruss/install-loft-cli
        with:
          loft-url: ${{ secrets.LOFT_URL }}
          loft-access-key: ${{ secrets.LOFT_ACCESS_KEY }}
      - name: Create staging Space
        uses: lizardruss/create-loft-space
        with:
          name: staging
```

## Customizing

### inputs

The following inputs can be used as `step.with` keys

| Name                | Type     | Description                        |
|---------------------|----------|------------------------------------|
| `name`              | String   | The name of the space to create