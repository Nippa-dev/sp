let response = JSON.parse($response.body);

response = {
    "product": "premium",
    "country": "US",
    "explicit_content": {"filter_enabled": false, "filter_locked": false},
    "subscription": {
        "status": "active",
        "renewal_date": "2099-12-31T23:59:59.999Z"
    }
};

$done({body: JSON.stringify(response)});
