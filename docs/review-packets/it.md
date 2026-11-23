# Review packet: IT Support, Networking & Cloud Foundations

- Course key: `it`  ·  Lessons: 9  ·  Review interval: 90 days
- Current status: `initial-review-required`  ·  Last reviewed: never
- Content files: `essential-courses.js`
- Official sources to check against:
  - https://www.cloudflare.com/learning/
  - https://learn.microsoft.com/en-us/training/azure/

## Reviewer checklist (tick after reading all lessons)

- [ ] Facts, definitions and terminology are correct
- [ ] Tool names, versions, menus and commands match current official documentation
- [ ] Every code example runs and produces the stated output
- [ ] Each knowledge-check answer is correct and the wrong options are clearly wrong
- [ ] Tasks are achievable by a beginner and prerequisites are taught first
- [ ] No unsafe, legal, tax or medical advice presented as professional advice
- [ ] India-specific statements (laws, exams, tools, salaries) are accurate or removed
- [ ] Nothing important for a job-ready beginner is missing (list gaps below)
- [ ] The capstone brief is realistic, clear and fairly assessable with the rubric

Reviewer name: ________   Date: ________   Outcome: approve / approve with fixes / rewrite

## Course introduction

Build practical foundations in computer systems, operating systems, networks, cloud identity and defensive security. Use isolated training environments and never test systems without permission.

## Lessons

### 1. Computer systems and troubleshooting

**Concept.** A computer combines hardware, firmware, operating system and applications. Troubleshooting starts by defining the symptom, scope, recent changes and impact. Change one variable at a time and record what you tried.

**Example**

```
A laptop cannot open one website. Check whether other sites work, whether another device works, whether DNS resolves and whether the browser reports a certificate or connection error.
```

**Explanation / note.** Good troubleshooting is evidence-led and reversible.

**Task.** Write a troubleshooting ticket for a fictional slow laptop. Include user impact, device, symptoms, recent changes, checks and next action.

**Quiz.** Why record the exact symptom before changing settings?
- Correct: It creates a baseline and helps isolate the cause
- Wrong: It makes the computer faster
- Wrong: It removes the need for testing

**Findings:** _none yet_

### 2. Operating systems, files and permissions

**Concept.** An operating system manages processes, memory, storage, devices and users. Filesystems organise data. Permissions control who can read, write or execute. Learn safe command-line navigation and least privilege.

**Example**

```
A file marked read-only may be readable but not writable by a user. Changing permissions broadly can expose data; inspect ownership and required access first.
```

**Explanation / note.** Smaller permissions reduce the damage from mistakes or compromised accounts.

**Task.** Practise navigating a local training folder, listing files, creating a directory and explaining owner/read/write/execute permissions.

**Quiz.** What does least privilege mean?
- Correct: Give only the access needed for the task
- Wrong: Give everyone administrator access
- Wrong: Disable all passwords

**Findings:** _none yet_

### 3. Networking fundamentals

**Concept.** A network moves data between devices using agreed protocols. Learn LAN/WAN, switches, routers, MAC and IP addresses, DNS, DHCP, TCP and UDP. Use layered models to locate where a failure may occur.

**Example**

```
When you enter a domain name, DNS helps find an IP address. TCP can establish a reliable connection; HTTP or HTTPS then carries web requests at the application layer.
```

**Explanation / note.** DNS resolution helps applications locate network services.

**Task.** Draw a home network showing modem/router, Wi-Fi clients, switch (if present), DNS and internet. Label private vs public addressing.

**Quiz.** What does DNS primarily do?
- Correct: Maps domain names to network records such as IP addresses
- Wrong: Encrypts every file
- Wrong: Assigns screen brightness

**Findings:** _none yet_

### 4. IPv4 addressing and subnetting

**Concept.** An IPv4 address has 32 bits. A CIDR prefix identifies the network bits; the remaining bits identify host space. Subnet masks and block sizes help calculate network boundaries. Special prefixes such as /31 and /32 have distinct uses.

**Example**

```
For /24, the mask is 255.255.255.0. There are 256 addresses in the block; in an ordinary LAN, network and broadcast addresses are not assigned to hosts, leaving 254 conventional usable addresses.
```

**Explanation / note.** A /26 leaves 6 host bits, so 2^6 = 64 total addresses.

**Task.** Calculate network, broadcast and ordinary usable range for 192.168.10.77/26. Show the block size and verify the host lies inside the range.

**Quiz.** How many total IPv4 addresses are in a /26 block?
- Correct: 64
- Wrong: 26
- Wrong: 256

**Findings:** _none yet_

### 5. Cloud services, identity and access

**Concept.** Cloud services provide compute, storage, networking and managed applications. Learn IaaS/PaaS/SaaS, regions, availability, shared responsibility, identity, roles, MFA and secrets. Cloud security is not automatically handled by the provider.

**Example**

```
A SaaS email provider manages the application platform, but the organisation still manages user accounts, MFA, sharing settings and appropriate data handling.
```

**Explanation / note.** The split depends on the service model and configuration.

**Task.** Design a fictional small team's cloud access matrix: role, resource, required action, approval and offboarding step. Do not create real cloud resources or expose credentials for this exercise.

**Quiz.** What does shared responsibility mean?
- Correct: Provider and customer each have defined security responsibilities
- Wrong: The provider is responsible for everything
- Wrong: The customer is responsible for physical data centres

**Findings:** _none yet_

### 6. Linux command line & shell basics

**Concept.** The command line lets you inspect and control a system quickly and repeat tasks as scripts. Learn the core commands: pwd shows the current folder, ls lists files, cd changes folder, cat shows a file, grep searches text, chmod changes permissions and sudo runs a command as an administrator. The pipe | sends one command's output into another, and > writes output to a file. Read the manual with man or --help before running an unfamiliar command, and never paste commands you do not understand, especially with sudo or rm. The grep line searches a log for failed events and shows the first twenty; the pipe connects the two commands. chmod 640 gives the owner read and write, the group read and others nothing. The script stops on errors instead of continuing silently.

**Example**

```
pwd
ls -l
cd /var/log
grep -i "failed" auth.log | head -n 20
ls -l | wc -l
chmod 640 report.txt

# a tiny script
#!/usr/bin/env bash
set -euo pipefail
echo "Disk usage:"
df -h /
```

**Explanation / note.** Pipes let small commands be combined into useful workflows.

**Task.** In a Linux virtual machine or WSL, create a practice folder, create three files, list them, search them with grep, count the results with a pipe, set permissions on one file and write a short script that prints today's date and free disk space.

**Quiz.** What does the pipe symbol do in a command such as ls | wc -l?
- Correct: It sends the output of the first command into the second command
- Wrong: It deletes the output of the first command
- Wrong: It runs both commands on different computers

**Findings:** _none yet_

### 7. DNS, DHCP & network troubleshooting

**Concept.** DHCP automatically gives a device an IP address, subnet mask, gateway and DNS server. DNS translates names such as example.com into IP addresses. Many network problems can be found by working up the layers: is the cable or Wi-Fi connected, does the device have a valid address, can it reach the gateway, can it reach an outside address, and can it resolve names? Tools help: ping tests reachability, nslookup or dig checks DNS, and traceroute shows the path. Change one thing at a time, record what you tried, and escalate with evidence.

**Example**

```
Troubleshooting ladder (cannot open a website)
  1. Link: Wi-Fi connected? cable plugged in?
  2. Address: ipconfig (Windows) or ip addr (Linux) shows a valid address?
  3. Gateway: ping the default gateway
  4. Internet: ping 8.8.8.8 works? -> routing is probably fine
  5. DNS: nslookup example.com fails? -> name resolution is the problem
  6. Path: traceroute or tracert shows where packets stop
```

**Explanation / note.** Reaching an IP address but not a name points to DNS.

**Task.** In a lab or virtual machine, work through the ladder and write down what each result would mean. Then change the DNS server to a wrong address and show how step 5 reveals the fault, and restore the original setting.

**Quiz.** A device can ping 8.8.8.8 but cannot open websites by name. What is the most likely problem?
- Correct: DNS name resolution
- Wrong: The network cable is unplugged
- Wrong: The device has no IP address

**Findings:** _none yet_

### 8. Backups, integrity checks & recovery

**Concept.** A backup you have never restored is only a hope. The 3-2-1 rule keeps three copies of important data, on two different kinds of storage, with one copy off site, so one fire, theft or ransomware infection cannot destroy everything. A checksum such as SHA-256 is a fingerprint of a file: if even one byte changes, the fingerprint changes, so comparing checksums shows whether a backup is intact. Recovery objectives guide how often to back up: the recovery point objective is how much recent data you can afford to lose, and the recovery time objective is how long a restore may take. Protect backups with encryption and access controls, and test a restore on a schedule. Only back up systems and data you are authorised to handle.

**Example**

```
mkdir -p docs && echo "report v1" > docs/report.txt
tar -czf backup.tar.gz docs                 # create the archive
sha256sum backup.tar.gz > backup.sha256     # record its fingerprint
sha256sum -c backup.sha256                  # prints: backup.tar.gz: OK

mkdir restore && tar -xzf backup.tar.gz -C restore
diff -r docs restore/docs && echo identical # the restore matches the original

# if the archive is damaged, the check fails:
# backup.tar.gz: FAILED
```

**Explanation / note.** The commands were run in a scratch folder: the archive verified as OK, the restored folder was identical to the original, and after appending a byte the check reported FAILED.

**Task.** On a practice machine, back up a small folder of fictional files to an archive, record a checksum, restore to a different folder and compare the two. Then damage a copy of the archive and show that the checksum check fails. Write a one-page plan for a fictional office stating the 3-2-1 copies, the recovery point and recovery time targets, and how often you will test a restore.

**Quiz.** What does a failed checksum comparison tell you?
- Correct: The file has changed or been corrupted since the checksum was made
- Wrong: The disk is full
- Wrong: The file has been encrypted successfully

**Findings:** _none yet_

### 9. Defensive security and incident response

**Concept.** Security protects confidentiality, integrity and availability. Learn patching, backups, MFA, phishing awareness, endpoint protection, logging and incident response. Never scan, exploit or access systems without explicit authorisation.

**Example**

```
If an account may be compromised, preserve evidence, report through the approved channel, revoke or reset credentials under policy, check MFA and review activity logs. Do not delete evidence or retaliate.
```

**Explanation / note.** Evidence and authorised containment matter more than improvisation.

**Task.** Write a tabletop response plan for a fictional phishing incident: detection, containment, reporting, recovery and lessons learned.

**Quiz.** What is the first priority during a suspected security incident?
- Correct: Follow the authorised response process and contain risk while preserving evidence
- Wrong: Delete all logs
- Wrong: Post credentials publicly

**Findings:** _none yet_

## Capstone project brief

**.** 

Build:

Evidence to submit:

Stretch goal: 

**Brief findings (is it realistic, clear and fairly assessable?):** _none yet_
