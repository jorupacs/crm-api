# crm-api
Mock API that mimics crm add, data enrichment and dialler to support Leads Management Service.

## API

### POST crm/add

Request:
```json
{
  "firstname": "Joel", 
  "lastname": "Pascual", 
  "phone": "09999999999"
}
```

Response:
```json
{
    "data": {
        "firstname": "Joel",
        "lastname": "Pascual",
        "phone": "09999999999"
    },
    "success": false
}
```


### POST crm/enrich

Request:
```json
{
  "firstname": "Joel", 
  "lastname": "Pascual", 
  "phone": "09999999999"
}
```

Response:
```json
{
    "data": {
        "firstname": "Joel",
        "lastname": "Pascual",
        "phone": "09999999999"
    },
    "success": true
}
```


### POST crm/dialler

Request:
```json
{
  "firstname": "Joel", 
  "lastname": "Pascual", 
  "phone": "09999999999"
}
```

Response:
```json
{
    "data": {
        "firstname": "Joel",
        "lastname": "Pascual",
        "phone": "09999999999"
    },
    "success": false
}
```
