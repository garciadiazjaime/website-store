MARCILLA STORE
==============

Installation Steps
------

This project has Marcilla store tier

* [Create a virtual environment](http://desarrolloweblibre.com/por-que-usar-virtualenv/) and activate it (`$ . bin/activate` or `$ source bin/activate`)
* Clone project
* Checkout to **dev** branch
* Create your branch (**topics/feature**)
* Install python packages (`$ pip install -r requirements.txt`)
* If you don't have postgres installed, [install postgres with homebrew, follow full tutorial](http://www.moncefbelyamani.com/how-to-install-postgresql-on-a-mac-with-homebrew-and-lunchy/), if you are not sure if you have homebrew type `$ brew`, if you don't get a *"command not found"* you have it installed already.
* Check your current users with `$ psql` and start a session with '$psql postgres',then `$ SELECT u.usename AS "User name", u.usesysid AS "User ID", CASE WHEN u.usesuper AND u.usecreatedb THEN CAST('superuser, create database' AS pg_catalog.text) WHEN u.usesuper THEN CAST('superuser' AS pg_catalog.text) WHEN u.usecreatedb THEN CAST('create database' AS pg_catalog.text) ELSE CAST('' AS pg_catalog.text) END AS "Attributes" FROM pg_catalog.pg_user u ORDER BY 1;`
* Create your settings file, use "settings/dev_yourname.py" as example.
* Replace the user in **your_settings.py**  (*DATABASES -> USER*)
* Create a database (`$ createdb mappromo`), the name is the one listed in **settings.py** (*DATABASES -> NAME *) 
* Check if there are errors (`$ python manage.py check`)
* Synch (`$ python manage.py syncdb`) the database. You'll be asked for a user name (always **admin**) and a password (always **1234**). Use any email.
* Migrate (`$ python manage.py migrate --settings=settings.dev_alex`) (If there are no applicable migrations the console will return a red message and this is normal).
* Populate DB (`$ python manage.py loaddata promo/fixtures.json --settings=settings.dev_alex`)
* Run BE server using your settings file (`$ python manage.py runserver --settings=settings.dev_yourname`)
* Go to **/admin** you should be able to log with the user and password
* Run gulp in another tab (`$ gulp watch`)


### NOTES:
* In case of using Osx you might need to install Xcode
* To improve speed when generating sprites, install oily (gem install oily_png) (http://compass-style.org/help/tutorials/spriting/)

=======
Django on OpenShift
===================

This git repository helps you get up and running quickly w/ a Django
installation on OpenShift.  The Django project name used in this repo
is 'myproject' but you can feel free to change it.  Right now the
backend is sqlite3 and the database runtime is found in
`$OPENSHIFT_DATA_DIR/db.sqlite3`.

Before you push this app for the first time, you will need to change
the [Django admin password](#admin-user-name-and-password).
Then, when you first push this
application to the cloud instance, the sqlite database is copied from
`wsgi/myproject/db.sqlite3` with your newly changed login
credentials. Other than the password change, this is the stock
database that is created when `python manage.py syncdb` is run with
only the admin app installed.

On subsequent pushes, a `python manage.py syncdb` is executed to make
sure that any models you added are created in the DB.  If you do
anything that requires an alter table, you could add the alter
statements in `GIT_ROOT/.openshift/action_hooks/alter.sql` and then use
`GIT_ROOT/.openshift/action_hooks/deploy` to execute that script (make
sure to back up your database w/ `rhc app snapshot save` first :) )

You can also turn on the DEBUG mode for Django application using the
`rhc env set DEBUG=True --app APP_NAME`. If you do this, you'll get
nicely formatted error pages in browser for HTTP 500 errors.

Do not forget to turn this environment variable off and fully restart
the application when you finish:

```
$ rhc env unset DEBUG
$ rhc app stop && rhc app start
```

Running on OpenShift
--------------------

Create an account at https://www.openshift.com

Install the RHC client tools if you have not already done so:
    
    sudo gem install rhc
    rhc setup

Create a python application

    rhc app create django python-2.7

Add this upstream repo

    cd django
    git remote add upstream -m master git://github.com/openshift/django-example.git
    git pull -s recursive -X theirs upstream master

Then push the repo upstream

    git push

Here, the [admin user name and password will be displayed](#admin-user-name-and-password), so pay
special attention.
	
That's it. You can now checkout your application at:

    http://django-$yournamespace.rhcloud.com

Admin user name and password
----------------------------
As the `git push` output scrolls by, keep an eye out for a
line of output that starts with `Django application credentials: `. This line
contains the generated admin password that you will need to begin
administering your Django app. This is the only time the password
will be displayed, so be sure to save it somewhere. You might want 
to pipe the output of the git push to a text file so you can grep for
the password later.

