export function opengmail ()
{
    var tweet = 'I am testing a button from within a Phaser example';

    var url = 'https://gmail.com'

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