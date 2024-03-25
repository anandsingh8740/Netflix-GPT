export const LOGO = 
"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";


export const USER_AVATAR = "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbqi9sA9YCxMfLmw9-NN7bNBxWUCA5RjypA0onlM6ElzbtNqB6HU7TQ4CRlylM9K3JkCi92Jdq6VMukbMu1zz7tTizhoK9E.png?r=8ff";


export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    },
  };

export const IMG_CDN_URL  = "https://image.tmdb.org/t/p/w500";

export const BG_URL = 
  "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES =  [
  {identifire: "en", name: "English"}, 
  {identifire: "hindi", name: "Hindi"}, 
  {identifire: "spanish", name: "Spanish"},
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
