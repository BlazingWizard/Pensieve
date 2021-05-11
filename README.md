# Description

Small service for saving memories (work in progress).

# How to start

1. Build and start backend
2. Build and start frontend

## Start Backend

1. Change directory to Pensive.Backend

```bash
cd Pensive.Back/
```

2. Restore NuGet packages.

```bash
dotnet restore Pensive.sln
```

3. Crete SQLite data base.

```bash
dotnet ef migrations add Initial --project Pensive.Data/ --startup-project Pensive.API
dotnet ef database update --project Pensive.Data --startup-project Pensive.API
```

4. Build and run backend.

```bash
dotnet run --project Pensive.API
```

## Start Frontend

1. Change directory to Pensive.Frontend

```bash
cd Pensive.Frontend/
```

2. Restore dependency

```bash
yarn
```

3. Build and run dev server.

```bash
yarn start
```
