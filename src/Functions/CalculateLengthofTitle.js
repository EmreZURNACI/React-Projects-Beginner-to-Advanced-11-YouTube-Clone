export const CalculateLengthofTitle = (title) => {
    if (String(title).length > 70) {
       return String(title).substring(0, 55) + "..."
    }
    else {
        return title;
    }
}
