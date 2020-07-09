#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
from app import create_app, get_config

app = create_app(os.getenv('FLASK_CONFIG') or 'default')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=get_config().DEBUG,ssl_context='adhoc')
