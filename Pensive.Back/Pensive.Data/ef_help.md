# Start work with `dotnet ef` on linux

```bash
export PATH="$PATH:$HOME/.dotnet/tools/"
export DOTNET_ROOT=/snap/dotnet-runtime-31/current
export DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=1
```

# Create migration

```bash
dotnet ef migrations add Initial --project Pensive.Data/ --startup-project Pensive.API
```

# Update data base

```bash
dotnet ef database update --project Pensive.Data --startup-project Pensive.API
```
