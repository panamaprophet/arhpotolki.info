
- pictures from db
- send calculations to email
- feedback from db 


- FE
    - static html generated from parcel -> s3

    getStaticProps:

    - api -> GET /api/pictures {picture, category}[]
    - api -> GET /api/feedback {name, text, picture}[]

- BE - 

    - api -> POST /api/calculcations {...}
    - api -> POST /api/pictures {picture, category}
    - api -> POST /api/feedback {name, text, picture}


---- next: ---

- FE -> build static + invalidate BO data + auto update



index.tsx: {
    const data = await getData(...);

    return <App data={...data} />;
}

