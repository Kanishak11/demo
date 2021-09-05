export function openlinkedin ()
{
    

    var url = 'https://www.linkedin.com/in/kanishak-mahendiratta-a61969193'

    var s = window.open(url, '_blank');

    if (s && s.focus)
    {
        s.focus();
    }
    else if (!s)
    {
        window.location.href = url;
    }
}