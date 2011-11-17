﻿// JScript File

function taskbar_init(e,wnd)
{
	wnd.taskbar=new Object();
	wnd.taskbar.element=e;
	wnd.wnd_on_show=function(w)
	{
		if(window.taskbar)
		{
			var b=wnd.document.createElement("input");
			b.type="button";
			b.style.padding="4px 10px";
			//b.style.border="1px outset";
			b.style.borderLeft="#eaeaea 1px solid";
			b.style.borderTop="#eaeaea 1px solid";
			b.style.borderRight="#808080 1px solid";
			b.style.borderBottom="#808080 1px solid";
			b.__w=w;
			w.__b=b;
			b.value=w.td_title.textContent;
			b.onmousedown=function()
			{
				this.__w.activate();
			};
			b.onfocus=function(){this.blur();};
			wnd.taskbar.element.appendChild(b);
			
			//w.td_title.style.backgroundColor="#808080";
		}
	};
	wnd.wnd_on_activate=function(w)
	{
		var i;
		for(i=0;i<window.obj.length;i++)
		{
			if(obj[i].type=="window" && obj[i].ready)
			{
				if(obj[i].__b)
				{
					//obj[i].__b.style.border="1px outset";
					obj[i].__b.style.borderLeft="#eaeaea 1px solid";
					obj[i].__b.style.borderTop="#eaeaea 1px solid";
					obj[i].__b.style.borderRight="#808080 1px solid";
					obj[i].__b.style.borderBottom="#808080 1px solid";
				}
				obj[i].td_title.style.backgroundColor="#808080";
			}
		}
		if(w.__b)
		{
			w.__b.style.borderLeft="#808080 1px solid";
			w.__b.style.borderTop="#808080 1px solid";
			w.__b.style.borderRight="#eaeaea 1px solid";
			w.__b.style.borderBottom="#eaeaea 1px solid";
		}
		w.td_title.style.backgroundColor="#0a246a";
	};
	wnd.wnd_on_close=function(w)
	{
		/*var i;
		for(i=0;i<window.obj.length;i++)
		{
			if(obj[i].type=="window")
			{
				if(obj[i].__b)obj[i].__b.style.border="1px outset";
				obj[i].td_title.style.backgroundColor="#808080";
			}
		}*/
		if(w.__b)
		{
			if(window.taskbar)
			{
				window.taskbar.element.removeChild(w.__b);
			}
		}
	};
	wnd.wnd_do_minimize=function(w)
	{
		if(w.__b)
		{
			if(window.taskbar)
			{
				//w.__b.style.border="1px outset";
				w.__b.style.borderLeft="#eaeaea 1px solid";
				w.__b.style.borderTop="#eaeaea 1px solid";
				w.__b.style.borderRight="#808080 1px solid";
				w.__b.style.borderBottom="#808080 1px solid";
				w.fr.style.display="none";
				if(w.maximized)
				{
					window.wnds_maximized--;
					if(window.wnds_maximized<=0)document.body.style.overflow="";
				}
				return true;
			}
		}
		return false;
	};
	wnd.wnd_on_restore=function(w)
	{
		w.fr.style.display="";
	};
	wnd.wnd_before_restore=function(w)
	{
		if(w.maximized)
		{
			if(w.minimized)
			{
				if(window.wnds_maximized==null)window.wnds_maximized=0;
				window.wnds_maximized++;
				document.body.style.overflow="hidden";
			}
			else
			{
				window.wnds_maximized--;
				if(window.wnds_maximized<=0)document.body.style.overflow="";
			}
		}
	};
	wnd.wnd_on_maximize=function(w)
	{
		if(window.wnds_maximized==null)window.wnds_maximized=0;
		window.wnds_maximized++;
		document.body.style.overflow="hidden";
	};
	wnd.wnd_on_titlechange=function(w)
	{
		if(w.__b)
		{
			w.__b.innerHTML=w.td_title.innerHTML;
		}
	};
}
