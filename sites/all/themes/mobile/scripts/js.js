var ANDROID_OLD_VERSION = false;
var JQMOBILE_TAGS = '<script type="text/javascript" src="/sites/all/themes/mobilezen/jquery.mobile-1.0a2.min.js"></script>';
// jQuery init
$(document).ready
(
	function()
	{
		// first retrieve Android version
		_get_version();
		// not using jquerymobile on Android version < 2.0
		if( !ANDROID_OLD_VERSION )
		{
			$('head').append( JQMOBILE_TAGS );
		}
  } 
)  

// Get Android version
function _get_version()
{
	if( navigator.userAgent.match(/Android/i) )
	{
		if( parseFloat( navigator.userAgent.match(/Android [0-9].[0-9]/i).toString().substring( 8 ) ) < 2.1 )
		{
			ANDROID_OLD_VERSION = true;
		}
	}
}