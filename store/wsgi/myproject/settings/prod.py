from .ecommerce import *

import os

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'store',
        'USER': os.environ['DB_USER'],
        'PASSWORD': os.environ['DB_PASSWORD',
        'HOST': os.environ['OPENSHIFT_POSTGRESQL_DB_HOST'],
        'PORT': os.environ['OPENSHIFT_POSTGRESQL_DB_PORT']
    }
}