

const data = [
    {
        egg: ["egg", "egg, fresh, whole, raw", "egg noodles", "egg briyani", "egg chapathi",
            "egg, fresh, whole, raw", "egg noodles", "egg briyani", "egg chapathi",
            "egg, fresh, whole, raw", "egg noodles", "egg briyani", "egg chapathi",
            "egg, fresh, whole, raw", "egg noodles", "egg briyani", "egg chapathi"]
    },
    {
        chicken: ["chicken", "chicken, fresh, whole, raw", "chicken noodles", "chicken briyani", "chicken chapathi",
            "chicken, fresh, whole, raw", "chicken noodles", "chicken briyani", "chicken chapathi",
            "chicken, fresh, whole, raw", "chicken noodles", "chicken briyani", "chicken chapathi",
            "chicken, fresh, whole, raw", "chicken noodles", "chicken briyani", "chicken chapathi"]
    },
    {
        carrot: ["carrot", "carrot, fresh, whole, raw", "carrot noodles", "carrot briyani", "carrot chapathi",
            "carrot, fresh, whole, raw", "carrot noodles", "carrot briyani", "carrot chapathi",
            "carrot, fresh, whole, raw", "carrot noodles", "carrot briyani", "carrot chapathi",
            "carrot, fresh, whole, raw", "carrot noodles", "carrot briyani", "carrot chapathi"]
    }
]

localStorage.setItem("data", JSON.stringify(data))