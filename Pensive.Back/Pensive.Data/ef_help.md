# Start work with `dotnet ef` on Mac OS

```bash
export PATH="$PATH:/Users/lobanov_vv/.dotnet/tools"
export DOTNET_ROOT="/opt/homebrew/opt/dotnet/libexec"
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
