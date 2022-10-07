
import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');
/*
SQL Injection Attack at the login page	"1) Go to http://demo.guru99.com/Security/SEC_V1/index.php
2) Enter Userid
3) Enter Password
4) Click Login"	"Userid=1303
Pass= xxx') OR 1 = 1 -- ]” "	Password invalid Error
Brute Force Attack simulation	"1) Go to http://demo.guru99.com/Security/SEC_V1/index.php
2) Enter Userid
3) Enter Password
4) Click Login
5) Repeat steps 1-4 until you find the correct password"	Password = wordlist from dictionary, common names, dates etc	IP banning after 3 wrong password attempts*/