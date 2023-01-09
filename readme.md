## Description

Demo project build on a domain controller and two domain members.
Supposed to use for debugging interractions between domain controller and domain members.

## How to use

1. Run: ```start.cmd```
2. Run: ```connect-domain-controller.cmd```

In opened terminal run: ```/usr/local/sbin/samba-domain-provision```

3. Run: ```connect-react-nginx.cmd```

In opened terminal run: ```/usr/local/sbin/samba-domain-join```

=> ```Joined domain DOMAIN1``` message is expected

4. Run: ```connect-apache-krb-proxy.cmd```

In opened terminal run: ```/usr/local/sbin/samba-domain-join```

=> ```Joined domain DOMAIN1``` message is expected

## Useful docs

* [Distribution-specific Package Installation](https://wiki.samba.org/index.php/Distribution-specific_Package_Installation#Debian.2FUbuntu)
* [Setting up Samba as an Active Directory Domain Controller](https://wiki.samba.org/index.php/Setting_up_Samba_as_an_Active_Directory_Domain_Controller)
* [Joining a Samba DC to an Existing Active Directory](https://wiki.samba.org/index.php/Joining_a_Samba_DC_to_an_Existing_Active_Directory)
* [Setting up Samba as a Domain Member](https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Domain_Member)

## TODO

- [ ] Add "Credits" for the materials I used

- [ ] Fix "cat: /var/lib/samba/private/krb5.conf: No such file or directory"

- [ ] Lock linux distr versions
